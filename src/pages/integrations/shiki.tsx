import { Header } from "../../components/header";
import { Highlight } from "../../components/highlight";
import * as exampleCss from "../../blocks/example.shiki.css"
import * as exampleTxt from "../../blocks/example.shiki.css"

export const ShikiPage = () => (
    <section class="py-2">
        <Header pre="Integrations" title="Integrating syntax highlighting with shiki" subtitle="Write a custom vite plugin that resolves files at runtime to embedd generated html"></Header>
        <p>You need the following files</p>
        <Highlight>{exampleTxt}</Highlight>
        <Highlight>{exampleCss}</Highlight>
    </section>
)