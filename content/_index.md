---
title: SVG Tutorial
image: /images/svg-tutorial.svg
description: An interactive SVG tutorial that introduces the basics of SVG documents.
type: tutorials
layout: aside-icon
icons: /icons/tutorial/
aside:
- Introduction
- XML Syntax
- Basic Elements
- Path Element
- Tree Structure
- Coordinate System
- Styling
- Typography
- Advanced Elements
- Web Usage
- References
# - Scripting
---

This article is an *interactive* tutorial for authoring SVG documents. It introduces the basic syntax, structure and elements of the SVG specification. The tutorial uses the [Vector.js](https://vectorjs.org/) library to make the SVGs on this page interactive.

## Introduction

SVG is an acronym for "scalable vector graphics". The SVG file type and specification is an XML based language for creating vector graphics both as stand-alone and embedded documents. SVG is a popular choice among developers and artists for creating vector based images such as logos, patterns and masking effects, because the file size is small and the resulting image is crisp.

Elements within an SVG document are defined using XML syntax and make up a tree-like structure called the SVG Document Object Model or SVGDOM for short. For example, the SVG below draws three circles equally spaced apart. The `svg` tag is the root of the document and defines a drawing area with a width of `200` and a height of `100`. Each circle is described by the tag `circl` which has properties that define the center and radius of the circle.

{{< highlight svg >}}
<svg width="200" height="100">
    <circle cx="50" cy="50" r="15"></circle>
    <circle cx="100" cy="50" r="15"></circle>
    <circle cx="150" cy="50" r="15"></circle>
</svg>
{{< /highlight >}}

This SVG is rendered below.

<svg width="200" height="100" class="example-svg">
  <style>
  .example-svg {
    margin-bottom:1rem;
    border:1px solid #333333;
  }
  .example-svg circle {
    fill:#333333;
  }
  </style>
  <circle cx="50" cy="50" r="15"></circle>
  <circle cx="100" cy="50" r="15"></circle>
  <circle cx="150" cy="50" r="15"></circle>
</svg>

By default, the SVG Coordinate System places the origin in the top-left corner of the drawing area. The positive *x* direction is to the right and the positive *y* direction is **down**. This can be tricky, especially for the uninitiated, however this is common in computer graphics to define the coordinate system with the *y*-direction as down instead of up.<!--TODO cite -->

{{<example "SVGCoordinateSystemExample">}}

Click and drag the blue control point above to see how a point is defined in the coordinate system.

## XML Syntax

The XML elements that make up the SVG language are formed by an opening and closing tag. The tag name indicates the element that is being defined. The opening tag contains attributes which describe the properties of the element.

For example, in the code snippet below, the `circle` tag defines a circle that is centered at the point `(50,50)` with a radius of `15`. The attributes `cx="50"`, `cy="50"` and `r="15"` define the position and radius.

```html
<circle cx="50" cy="50" r="15"></circle>
```

In addition to element specific attributes, there are also global attributes that can be defined for any element. For example, the group element below is given the id `example-id` and the class `example-class`.

```html
<g id="example-id" class="example-class">
  ...
</g>
```

Global attributes are useful for styling, manipulating and querying elements. In general, the `id` attribute is unique and identifies a single element. The `class` class attribute is commonly applied to one or more elements to style them the same way.

| Gobal Attributes | Description |
| --- | --- |
| `id` | Unique string identifier |
| `class` | List of classes separated by spaces |
| `style` | Inline styling for this element |

## Basic Elements

The basic visual elements define shapes and lines. For example, some basic elements are lines, circles and ellipses. The geometric properties of the elements are defined by attributes in their opening tag. **Note**, the elements below are interactive. Click and drag either any of the the blue points around to see how the element is drawn.

### Line Element

{{<example "SVGLineExample">}}

The line element draws a line between two points `(x1, y1)` and `(x2, y2)`. The style attributes `stroke` and `stroke-width` control the color and width of the line element. 

### Ellipse Element

{{<example "SVGEllipseExample">}}

The ellipse element draws an ellipse centered at the point `(cx, cy)` with the horizontal radius `rx` and the vertical radius `ry`. The ellipse's path can by styled with the CSS `stroke` and `stroke-width` attributes which control the color and width. The ellipse's fill can be styled with the CSS `fill` attribute

### Rectangle Element

{{<example "SVGRectangleExample">}}

The rectangle element draws a rectangle whose top left corner is defined the point `(x,y)` with the dimensions `width` and `height`. If a negative width or height value is supplied, the element is not rendered. The rectangles's path can by styled with the CSS `stroke` and `stroke-width` attributes which control the color and width. The rectangles's fill can be styled with the CSS `fill` attribute

### Path Element

The path element is powerful and complex. Every element so far can be drawn using the path element. A path is defined through a series of commands. Each command starts with a letter and is followed by a series of values that describe the shape of the path segment. Here is a table summarizing the basic path commands.

<div class="contain-table">

| Command          | Syntax                                                              |
| ---------------- | ------------------------------------------------------------------- |
| Move To          | {{<code "xml">}}M x y{{</code>}}                                    |
| Line             | {{<code "xml">}}L x1 y1{{</code>}}                                  |
| Quadratic Bezier | {{<code "xml">}}Q x1 y1 x2 y2{{</code>}}                            |
| Cubic Bezier     | {{<code "xml">}}C x1 y1 x2 y2 x3 y3{{</code>}}                      |
| Arc              | {{<code "xml">}}A rx ry rotation arc-flag sweep-flag x y{{</code>}} |
| Close            | {{<code "xml">}}Z{{</code>}}                                        |

</div>

Commands are defined to use absolute or relative coordinates. A command defined with an upper-case letter means that the command is absolute and the coordinates are defined using the origin of the coordinate system. A command defined with a lower-case letter means that the coordinates are relative and described using the previous position of the path.

#### Path Move To and Line Command

```xml
<path d="M x y L x1 y1"></path>
```

Most paths start with a "Move To" command which defines where the path starts in the coordinate system. In the example shown below the command `M x y` starts drawing the path at the point `(x,y)`. Without the move to command the default starting point is `(0,0)`. Then because the move to command is followed by the letter `L` a line is drawn to the point described by the line command. See the example below.

{{<example "SVGPathLineExample">}}

#### Path Quadratic Bezier Curve

```xml
<path d="Q x1 y1 x2 y2"></path>
```

The SVG specification offers a couple variations of the bezier curves. The quadratic bezier curve command, shown below, draws a quadratic bezier curve using the previous position of the path and the two points defined within the command.

{{<example "SVGPathBezierQuadraticExample">}}

#### Path Cubic Bezier Curve

```xml
<path d="C x1 y1 x2 y2 x3 y3"></path>
```

The cubic bezier curve draws a cubic bezier curve using the previous position of the path and three points defined within the command.

{{<example "SVGPathBezierCubicExample">}}

#### Path Arc Command

```xml
<path d="A rx ry rotation arc-flag sweep-flag x y"></path>
```

The arc command draws an arc between two points using the curve of an ellipse defined by a horizontal and vertical radius. If the distance between the two points is greater than can be spanned by the provided ellipse, the smallest possible ellipse is used to span the distance. The rotation value defines the orientation of the ellipse in space and the two flags decide which arc is drawn.

{{<example "SVGPathArcExample">}}

Note, because of the math involved for solving for an ellipse between two points, there is two solutions which leads to two possible ellipsis.

#### Path Close Command

The close command "completes the loop" and connects the current location of the path to the origin of the path. This is useful when drawing shapes that are given a fill color.

{{<example "SVGPathCloseExample">}}

The path element is core to the SVG specification and complicated. See the [MDN paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) for more information.

### Tree Structure

SVG Documents form a tree-like structure because the language is based on XML. Each element contains zero or more child elements placed within the opening and closing tag of the element. Take for example the simple SVG below.

```html
<svg width="300" height="200">
  <g>
    <circle cx="50" cy="50" r="10"></circle>
    <circle cx="100" cy="50" r="10"></circle>
  </g>
  <rect x="50" y="80" width="50" height="20"></rect>
</svg>
```

The corresponding tree like structure is shown below. There are two important things to know about this structure. 1) It is hierarchical and elements inherit the transformations and and styles applied to their parents. For example, if the group element has a transformation applied to it, its two children will also be transformed. 2) The order in which elements are drawn depends on their order in the document. Elements that are drawn first will appear in the background and elements that are drawn last will appear in the foreground. 

{{<image
src="images/tree-structure.svg"
alt="SVG XML Tree Structure"
class="center"
>}}

## Coordinate System

The origin of the svg coordinate system is at the top-left corner of the image. The positive x-direction is to the right and the positive y-direction is down. In the world of computer graphics it is standard to have the y-axis flipped since elements are positioned relative to the top-left corner of the container. Try clicking and dragging the control point below.

{{<example "SVGCoordinateSystemExample">}}

### View Box

{{< highlight svg>}}
<svg viewBox="minX minY width height"></svg>
{{< /highlight >}}

The view box attribute allows the user to define the internal coordinate system used for drawing. This is useful for two reasons. 1) It allows for the creation of responsive images that leverage the power of SVG. 2) The viewbox can be used to programmatically make sure that all elements are displayed for the user. <!-- TODO: link -->

```
TODO: viewbox example with preserve aspect ratio dropdown
```

**Note**, as demonstrated in the interactive if the view port dimensions disagrees with the viewbox, the default strategy is to ... This can be changed using the `preserveAspectRatio` attribute

## Styling

SVG elements are styled using Cascading Style Sheets or CSS for short. Styling can be applied to individual elements as inline style or using a user-define style sheet. There are many presentation attributes that can be styles, but the two most common are the `fill` and `stroke` of a geometric element.

### Inline Style

Styling can be applied to individual elements using the style attribute. This is very useful for testing out different styling on an element. In practice, a well constructed stylsheet will be cleaner and reduce the SVGs file size. Shown below are three circles styled using inline style.

{{<highlight svg>}}
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="75" r="25" style="fill:#de4850"></circle>
  <circle cx="125" cy="75" r="25" style="fill:#eeb535;"></circle>
  <circle cx="200" cy="75" r="25" style="fill:#68c541;"></circle>
</svg>
{{</highlight>}}

This produces the graphic shown below.

<svg xmlns="http://www.w3.org/2000/svg" style="width:100%; height:150px; margin-bottom:1rem" class="border">
  <circle cx="50" cy="75" r="25" style="fill:#de4850"></circle>
  <circle cx="125" cy="75" r="25" style="fill:#eeb535;"></circle>
  <circle cx="200" cy="75" r="25" style="fill:#68c541;"></circle>
</svg>

There are many different values that are accepted for color. The colors are shown above using their hexadecimal representation. Color pickers 

### Styesheets

The alternative to inline styling are stylesheets which are more powerful. Stylesheet contain selectors which style elements based on their type, class and other attributes. Selectors have priority and can contain complex logic for selecting specific elements.

```css
/* style elements by class */
.red {
  fill: #de4850;
}
.yellow {
  fill: #eeb535;
}
.green {
  fill: #68c541;
}

/* style elements by type */
circle {
  stroke:#dddddd;
  stroke-width: 4px;
}
```

```xml
<circle class="red" cx="50" cy="75" r="25"></circle>
<circle class="yellow" cx="125" cy="75" r="25"></circle>
<circle class="green" cx="200" cy="75" r="25"></circle>
```

<svg xmlns="http://www.w3.org/2000/svg" style="width:100%; height:150px; margin-bottom:1rem" class="border" id="style-example">
<style>
#style-example circle {
  stroke:#dddddd;
  stroke-width: 3px;
}
#style-example .red {
  fill: #de4850;
}
#style-example .yellow {
  fill: #eeb535;
}
#style-example .green {
  fill: #68c541;
}
#style-example .class-name {
  stroke:purple;
  stroke-width:1px;
  fill:none;
}
</style>
  <circle class="red" cx="50" cy="75" r="25"></circle>
  <circle class="yellow" cx="125" cy="75" r="25"></circle>
  <circle class="green" cx="200" cy="75" r="25"></circle>
</svg>

See [MDN CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) for more information.

## Typography

There are a number of elements for creating and formatting text within SVG documents. Note, using fonts in SVG can be a bit tricky. Two good strategies are 1) to use web safe fonts which are likely to be on every operating system and 2) to use web fonts such as [google fonts](https://fonts.google.com/). While option 2) has a much wider selection of fonts, if the SVG is embedded using an HTML `img` tag the browser does not allow access to external link sources and so a fall back font is used instead.

### Text Element

The text element draws text at the point `(x, y)` in the document.

<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="150" class="border">
  <style>
    text.sample {
      font-family:monospace;
      font-size:22px;
      alignment-baseline:middle;
      text-anchor:middle;
    }
    </style>
  <text x="352" y="75" class="sample">Typography</text>
</svg>

{{< highlight svg>}}
<text x="75" y="75">The quick brown fox jumps over the lazy dog.</text>
{{< /highlight >}}

### Tspan Element

The text span element is useful for changing the position and or the styling of a piece of text within a text element. In the example below, the first word is placed within a tspan element and bolded to emphasize the word. Then, later, a tspan element is positioned relative to the last tspan element.

<svg xmlns="http://www.w3.org/2000/svg" style="width:100%; height:150px;" class="border">
  <style>
    #tspan-example {
      font-size:22px;
      alignment-baseline:middle;
      text-anchor:left;
    }
    </style>
    <text id="tspan-example" x="32" y="75" >
      <tspan>"</tspan>
      <tspan style="font-weight:600;">Fly </tspan>
      <tspan>you fools.</tspan>
      <tspan>"</tspan>
      <tspan dx=20 dy=30>Gandalf the Grey</tspan>
    <text>
</svg>

{{< highlight svg>}}
<text id="tspan-example" x="32" y="75" >
  <tspan>"</tspan>
  <tspan style="font-weight:600;">Fly </tspan>
  <tspan>you fools.</tspan>
  <tspan>"</tspan>
  <tspan dx=20 dy=30>Gandalf the Grey</tspan>
<text>
{{< /highlight >}}

### Text Position

The position where the text is drawn within the coordinate system is determined by the [dominant-baseline](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline) and [text-anchor](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor) attributes. The default position is shown in the figure below with a number of options for the two attributes.

{{<image
src="images/text-position.svg"
alt="SVG Text Position"
>}}

## Advanced Elements

The SVG specification has a lot of elements, and while not all are covered in this tutorial, there are a couple of advanced elements worth mentioning.

### Clip Path Element

Clip paths can be applied to elements to show only the part of the graphic contained within the shape of the clip path. The clip path is applied to an element and its children by setting the clip-path attribute to point to a clip path element in the DOM tree. For example, the clip path defined by the child path element creatings a **masking** effect when applied to an image.

{{<highlight svg>}}
<clipPath id="my-clip-path">
  <path d="M 50 50 L 250 50 L 250 250 L 50 250 Z"/>
</clipPath>
<image clip-path="url(#my-clip-path)" href="..."/>

{{</highlight>}}

Click and drag the points which control the shape of the clip path.

{{<example "SVGClipPathExample" >}}

The clipping path can be applied to many more elements and can be defined using other geometric elements.

### Defs Element

The defs element contains a graphical "definition" that can be re-used in the document. For example, an arrow can be defined and then attached to path.

```xml
<svg>
  <defs>
    <!-- Defines the shape of the arrow-->
    <marker></marker>
  </defs>
  <!-- Uses the marker -->
  <path></path>
</svg>
```

There are many more advanced elements that are note shown here. See the full list of SVG Elements [documented on MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element).

## Web Usage

The web is one of the most common use cases of SVG documents because of their responsive and programmatic properties. This section explains how to use SVGs on the web and weighs the pros and cons of different use cases.

### Embedding SVGs

There are two common strategies for embedding SVG docs on the web: using an `img` tag and as inline `xml`. Both have advantages depending on your use case.

#### Image Tag

```html
<img src="/path/to/file.svg" width="400" height="300">
```

The `img` tag is useful for SVG documents that appear in multiple places and leverages browser caching which can be useful if the image appears on many pages that the user navigates to. Considurations when using the `img` tag are: external stylesheets will not affect the styling of the SVG and Javascript cannot be used to manipulated the document. 

#### Inline SVG

```html
<svg width="400" height="300">
  ...
</svg>
```

The **pros** of embedding an inline SVG document is that it saves the browser a resource request, allows for javascript to interact with the document and allows more flexibility for styling SVG elements. This approach is often used for icons and interactivity.

The **cons** of inlining SVGs is that it can lead to increased `html` size and since the browser is not able to cache the image, subsequent page loads will not be faster than the first page load.

## References

The SVG specification is a standard implemented by browsers and applications. The current version of the spec is [SVG 1.1](https://www.w3.org/TR/SVG11/) and the next candidate recomendation is [SVG 2.0](https://www.w3.org/TR/SVG2/). For this reason, the language is interpretted slightly differently between environments and definitely used differently due to its versatility.

- [SVG 1.1 Specification](https://www.w3.org/TR/SVG11/)
- [SVG 2.0 Specification](https://www.w3.org/TR/SVG2/)

There are many web resources available. Personally, I recommend [Mozilla Web Docs](https://developer.mozilla.org/en-US/) as the best place to look-up SVG documentation and other web related documentation.

- [MDN - SVG Overview](https://developer.mozilla.org/en-US/docs/Web/SVG)
- [MDN - SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [MDN - SVG Elements](https://developer.mozilla.org/en-US/docs/Web/SVG/Element)

## Source

The source code for this article is available on [Github](https://github.com/kurtbruns/svg-tutorial). If you have constructive feedback please submit an issue or pull request.