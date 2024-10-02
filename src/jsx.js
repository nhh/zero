export const __createElement = (tag, props, ...children) => {
  if (typeof tag === 'function') {
    return tag(props, ...children);
  }

  if (typeof tag === 'object') {
    throw "Cannot parse object, please use function"
    // element = structuredClone(tag)
  }

  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith('on') && name.toLowerCase() in window)
      element.addEventListener(name.toLowerCase().substr(2), value);
    else element.setAttribute(name, value.toString());
  });

  // Todo this style feature might be a little too frameworky
  // It is more or less the same as styled components
  // https://styled-components.com/
  children.forEach((child) => {
    if(typeof child === 'object' && child.tagName === "STYLE") {
      element.style = child.innerText
    } else {
      appendChild(element, child);
    }
  });

  return element;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};

export const __createFragment = (props, ...children) => {
  return children;
};
