# Creating slider in react

## 1️⃣ Imports and Setup
`import React, { useRef } from "react";`  
- You import React to define the component.
- You import useRef — a React hook that lets you get a reference to a DOM element (so you can directly control scrolling).

## 2️⃣ Component Definition
```jsx
export default function HorizontalSlider() {
  const sliderRef = useRef(null);
```
You create a ref (sliderRef) that will later point to the scrollable div (the slider track).

useRef(null) initializes it with no value (null), but React will fill it once the component renders.

So you can do things like:
```jsx
sliderRef.current.scrollBy(...)
```
to programmatically scroll the slider.

## 3️⃣ Scroll Functions
```jsx
const scrollLeft = () => {
  sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
};
```
`scrollBy()` is a native DOM method that scrolls the container horizontally.

`left: -300` → scrolls left by 300px

`left: 300` → scrolls right by 300px

`behavior: "smooth"` → makes it animate nicely instead of jumping instantly.

These two functions are used when the arrow buttons are clicked.

## 4️⃣ The Outer Container
```jsx
<div className="relative w-4/5 max-w-5xl overflow-hidden mx-auto">
```
This `<div>` wraps everything:

`relative` → allows you to position the child buttons and fades absolutely inside it.

`w-4/5 max-w-5xl` → gives it a nice responsive width.

`overflow-hidden` → hides any overflowing content (like the fade gradient overlays).

`mx-auto` → centers it horizontally in the page.

This is your main slider container.

## 5️⃣ The Fades (blur/edge gradients)
```jsx
<div className="absolute top-0 bottom-0 left-0 w-20 bg-linear-to-r from-[#111] to-transparent pointer-events-none z-10"></div>
<div className="absolute top-0 bottom-0 right-0 w-20 bg-linear-to-l from-[#111] to-transparent pointer-events-none z-10"></div>
```
Each of these divs creates a gradient fade effect on the left and right edges of the slider.

Let’s break the classes:

`absolute top-0 bottom-0 left-0/right-0` → pins the fades to the container edges.

`w-20` → each fade is 80px wide.

`bg-linear-to-r or bg-linear-to-l` → defines a linear gradient background.

`from-[#111] to-transparent` → color transition (dark → transparent).

`pointer-events-none` → ensures they don’t block clicks on the buttons or slides.

`z-10` → keeps them above the slides visually.

optional:
`bg-[linear-gradient(to_right,transparent,white,transparent)]`
Custom gradient syntax — allows 3 stops

Effect: It looks like the sides of the slider fade into darkness, giving it a soft edge.

## 6️⃣ Navigation Buttons
```jsx
<button
  onClick={scrollLeft}
  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white text-2xl p-3 rounded-full hover:bg-white/20 transition z-20"
>
  &#8249;
</button>
```
Right Button
```jsx
<button
  onClick={scrollRight}
  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white text-2xl p-3 rounded-full hover:bg-white/20 transition z-20"
>
  &#8250;
</button>
```
Both buttons:

Are positioned absolutely `(left-2 and right-2)` relative to the parent container.

`top-1/2` -translate-y-1/2 → vertically center them.

`bg-black/60` → semi-transparent black background.

`rounded-ful` → makes them circular.

`hover:bg-white/` → nice hover glow.

`transit` → smoothens hover animation.

`z-2` → ensures buttons are above slides and fades.

`onClick` triggers `scrollLeft()` or `scrollRight()`.

## 7️⃣ The Slider Track (scrollable area)
```jsx
<div
  ref={sliderRef}
  className="flex overflow-x-auto scroll-smooth hide-scrollbar px-20"
>
  {Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="min-w-[250px] h-[150px] m-2 flex justify-center items-center text-2xl font-bold text-white bg-[#444] rounded-xl flex-shrink-0"
    >
      {i + 1}
    </div>
  ))}
</div>
```
Inside the slider:

`ref={sliderRef}` → connects this div to the ref, so the scroll functions can target it.

`flex` → lays slides horizontally in a row.

`overflow-x-auto` → enables horizontal scrolling.

`scroll-smooth` → enables smooth manual scrolling.

`hide-scrollbar` → (custom class) hides the ugly scrollbar.

`px-20` → ensures slides don’t touch the fades on either end.

Each Slide:

`min-w-[250px]` → each slide is fixed 250px wide.

`flex-shrink-0` → prevents them from shrinking.

`h-[150px]` → height of slide.

`m-2` → spacing between slides.

`bg-[#444]` → dark gray background.

`rounded-xl` → smooth corners.

`text-2xl font-bold` → large white centered text.

The slide number ({i + 1}) comes from mapping over an array of 6 items.

So this is your scrollable content area.

## ✅ Hide Scrollbar:
If you haven’t already, add this to your index.css:
```css
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```
- ✅ Responsive:
The layout automatically adapts since widths are in % and slides have fixed size.

- ✅ Interactivity:
The buttons scroll the container smoothly using the ref.
You can also manually scroll using mouse wheel or swipe on mobile.

## 🧩 Summary
<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Part</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>useRef</strong></td>
      <td>Access the slider DOM directly to scroll it programmatically.</td>
    </tr>
    <tr>
      <td><strong>scrollBy()</strong></td>
      <td>Scrolls the slider left/right with smooth animation.</td>
    </tr>
    <tr>
      <td><strong>overflow-x-auto</strong></td>
      <td>Enables horizontal scrolling for the flex container.</td>
    </tr>
    <tr>
      <td><strong>bg-gradient-to-r/l</strong></td>
      <td>Adds smooth blur edges for visual polish.</td>
    </tr>
    <tr>
      <td><strong>hide-scrollbar</strong></td>
      <td>Removes scrollbar for a clean UI.</td>
    </tr>
    <tr>
      <td><strong>buttons</strong></td>
      <td>Trigger scrolling with arrows.</td>
    </tr>
  </tbody>
</table>

### Final Output
- ✅ Responsive horizontal slider
- ✅ Smooth scrolling
- ✅ Hidden scrollbar
- ✅ Gradient edge blur
- ✅ Clickable left/right arrows
- ✅ Fully styled using Tailwind utilities