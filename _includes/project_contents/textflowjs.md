[![GitHub](https://badgen.net/badge/icon/github?icon=github&label)](https://github.com/aswanthabam) [![ABAM](https://badgen.net/badge/ABAM/view/)](https://abam.herokuapp.com/projects/TextFlowJS)

TextFlowJS is a script that animates text to appear as if it's being typed.

## Usage

### Using JSDelivr

To use TextFlowJS, include the JavaScript and CSS files in your project.

1. Add the TextFlowJS stylesheet link.
2. Add the TextFlowJS script link.

### Applying TextFlowJS

To apply the animation to elements:

- Add the class name "texter" to the elements you want to animate.
- Use `avcWrapAll()` to wrap all elements with the class "texter" or `avcWrapOne(elem)` to wrap a specific element.

### Customizing

Customize the animation through the `avcWrap` instance returned by the function. You can adjust text color, cursor color, cursor dimensions, and animation duration.

Further customization can be done by modifying the CSS attributes of your elements.
