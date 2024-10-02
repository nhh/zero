import { Header } from "../../components/header";
import { Highlight } from "../../components/highlight";

export const ShikiPage = () => (
    <section class="py-2">
        <Header pre="Integrations" title="Integrating syntax highlighting with shiki" subtitle="Write a custom vite plugin that resolves files at runtime to embedd generated html"></Header>

        <p>You need the following files</p>
        <Highlight>{import("../../blocks/folder-structure.shiki.txt")}</Highlight>

        <Highlight>{import("../../blocks/example.shiki.css")}</Highlight>
        <Highlight>{import("../../blocks/example.shiki.css")}</Highlight>
        <Highlight>{import("../../blocks/example.shiki.css")}</Highlight>
        <Highlight>{import("../../blocks/example.shiki.css")}</Highlight>

    </section>
)