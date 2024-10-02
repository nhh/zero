// https://dev.to/ferdaber/typescript-and-jsx-part-ii---what-can-create-jsx-22h6
// https://github.com/ferdaber --> Der weiss evtl ne Menge
declare global {
  namespace Zero {
    type WithClass<Type> = {
      [Property in keyof Type]?: Type[Property];
    } & {
      class?: string;
    };

    // interface ThisTypeMightBeUseful extends HTMLElementTagNameMap { }
    interface HtmlElement extends Omit<HTMLElement, "style"> {
      style?: string;
    }

    // Maybe we can construct a joined type with these stuff
    // This example excludes style from the HTMLElementTagNameMap
    // type NoCart = Omit<HTMLElementTagNameMap, "style">;
    interface HtmlElementTagNameMap
      extends Omit<HTMLElementTagNameMap, "style"> {
      style?: string;
    }

    interface SvgElementTagNameMap extends Omit<SVGElementTagNameMap, "style"> {
      style?: string;
    }
  }

  namespace JSX {
    interface Element extends Zero.HtmlElement {
      new (props: any, context?: any): Zero.WithClass<Zero.HtmlElement>;
    }

    type ElementClass = never;
    type ElementAttributesProperty = never;
    type ElementChildrenAttribute = never;

    // custom prop types for example <div myProp={} />
    type IntrinsicAttributes = {
      [Property in keyof Zero.HtmlElement]?: Zero.HtmlElement[Property];
    };

    type IntrinsicClassAttributes = {
      [Property in keyof Zero.HtmlElement]?: Zero.HtmlElement[Property];
    };

    type SvgAny = {
      [Property in keyof Zero.SvgElementTagNameMap]?: any;
    };

    type IntrinsicElements = {
      // SVG does not exist in
      [Property in keyof Zero.HtmlElementTagNameMap]?: Zero.WithClass<
        Zero.HtmlElementTagNameMap[Property]
      >;
    } & SvgAny;
  }
}
