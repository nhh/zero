// The image is not yet attached to the dom
// Detecting styles does not work this early
export const Optimize = (_: any, child: any) => {
    if(!child) return <>Wrong</>
    if(child.tagName !== "IMG") return <>Wrong</>
    if(!child.height || !child.width) return <>Cannot optimize image without height and width</>

    child.lazy = true
    const originalImageUrl = child.src

    child.src = `https://imgproxy.0xfff.de/_/quality:80/size:${child.width}:${child.height}/resize:fill:${child.width}:${child.height}/gravity:sm/plain/${originalImageUrl}`

    return child
}