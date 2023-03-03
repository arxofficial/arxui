/*function library(selector) {
  this.blur = func => {
    this.event('blur', func)
  }
  
  this.change = func => {
    this.event('change', func)
  }
  
  this.click = func => {
    this.event('click', func)
  }
  
  this.css = object => {
    const getElement = document.querySelectorAll(selector)
    getElement.forEach(element => {
      Object.entries(object).forEach(query => {
        const [property, value] = query
        element.style[property] = value
      })
    })
  }
  
  this.dbclick = func => {
    this.event('dbclick', func)
  }
  
  this.event = (event, func) => {
    const getElement = document.querySelectorAll(selector)
    getElement.forEach(element => {
      element.addEventListener(event, func)
    })
  }
  
  this.focus = func => {
    this.event('focus', func)
  }
  
  this.hover = (inFunc, outFunc) => {
    this.mouseenter(inFunc)
    this.mouseleave(outFunc)
  }
  
  this.input = func => {
    this.event('input', func)
  }
  
  this.invalid = func => {
    this.event('invalid', func)
  }
  
  this.keydown = func => {
    this.event('keydown', func)
  }
  
  this.keypress = func => {
    this.event('keypress', func)
  }
  
  this.keyup = func => {
    this.event('keyup', func)
  }
  
  this.load = func => {
    selector.addEventListener('load', func)
  }
  
  this.mousedown = func => {
    this.event('mousedown', func)
  }
  
  this.mouseenter = func => {
    this.event('mouseenter', func)
  }
  
  this.mouseleave = func => {
    this.event('mouseleave', func)
  }
  
  this.mousemove = func => {
    this.event('mousemove', func)
  }
  
  this.mouseover = func => {
    this.event('mouseover', func)
  }
  
  this.mouseout = func => {
    this.event('mouseout', func)
  }
  
  this.mouseup = func => {
    this.event('mouseup', func)
  }
  
  this.offline = func => {
    selector.addEventListener('offline', func)
  }
  
  this.online = func => {
    selector.addEventListener('online', func)
  }
  
  this.reset = func => {
    this.event('reset', func)
  }
  
  this.scroll = func => {
    this.event('scroll', func)
  }
  
  this.submit = func => {
    this.event('submit', func)
  }
  
  this.unload = func => {
    this.event('unload', func)
  }
  
  this.wheel = func => {
    this.event('wheel', func)
  }
}

function $(selector) {
  return new library(selector)
}*/

const JavaScript = {
  
  // Window Onload Event
  load: func => {
    window.addEventListener('load', func)
  },

  // Calculate Percentage
  percent: value => {
    return Math.round(value / 100.0)
  }
  
}

const StyleSheet = {
  
  // Set Accent Color Of Element
  accentColor: (color = auto) => {
    return color
  },
  
  // Valid Align Content Property Of CSS
  alignContent: {
    baseline: 'baseline',
    center: 'center',
    end: 'end',
    firstBaseline: 'first baseline',
    flexEnd: 'flex-end',
    flexStart: 'flex-start',
    lastBaseline: 'last baseline',
    normal: 'normal',
    spaceAround: 'space-around',
    spaceBetween: 'space-between',
    spaceEvenly: 'space-evenly',
    start: 'start',
    stretch: 'stretch'
  },

  // Valid Align Items Property Of CSS
  alignItems: {
    baseline: 'baseline',
    center: 'center',
    end: 'end',
    firstBaseline: 'first baseline',
    flexEnd: 'flex-end',
    flexStart: 'flex-start',
    lastBaseline: 'last baseline',
    normal: 'normal',
    start: 'start',
    stretch: 'stretch'
  },

  // Valid Align Self Property Of CSS
  alignSelf: {
    auto: 'auto',
    baseline: 'baseline',
    center: 'center',
    end: 'end',
    firstBaseline: 'first baseline',
    flexEnd: 'flex-end',
    flexStart: 'flex-start',
    lastBaseline: 'last baseline',
    normal: 'normal',
    selfEnd: 'self-end',
    selfStart: 'self-start',
    start: 'start',
    stretch: 'stretch'
  },
  
  // Set Animation Of Element
  animation: {
    
  },
  
  // Set Animation Delay Of Element
  animationDelay: time => {
    return time
  },
  
  // Valid Animation Direction Property Of CSS
  animationDirection: {
    alternate: 'alternate',
    alternateReverse: 'alternate-reverse',
    normal: 'normal',
    reverse: 'reverse'
  },
  
  // Set Animation Duration Of Element
  animationDuration: time => {
    return time
  },
  
  // Valid Animation Fill Mode Property Of CSS
  animationFillMode: {
    backwards: 'backwards',
    both: 'both',
    forward: 'forward',
    none: 'none'
  },
  
  // Set Animation Iteration Count Of Element
  animationIterationCount: (count = 'infinite') => {
    return count
  },
  
  // Set Animation Name Of Element
  animationName: name => {
    return name
  },
  
  // Valid Animation Play State Of CSS
  animationPlayState: {
    paused: 'paused',
    running: 'running'
  },
  
  // Valid Animation Timing Function Of CSS
  animationTimingFunction: {
    cubicBezier: (p1, p2, p3, p4) => {
      return `cubic-bezier(${p1}, ${p2}, ${p3}, ${p4}`
    },
    ease: 'ease',
    easeIn: 'ease-in',
    easeInOut: 'ease-in-out',
    easeOut: 'ease-out',
    jumpterm: {
      end: 'end',
      jumpBoth: 'jump-both',
      jumpEnd: 'jump-end',
      jumpNone: 'jump-none',
      jumpStart: 'jump-start',
      start: 'start'
    },
    linear: 'linear',
    stepEnd: 'stap-end',
    steps: (n, jumpterm) => {
      return `steps(${n}, ${jumpterm})`
    },
    stepStart: 'step-start'
  },

  // Valid Appearance Of CSS
  appearance: {
    auto: 'auto',
    button: 'button',
    checkbox: 'checkbox',
    listbox: 'listbox',
    menulist: 'menulist',
    menulistButton: 'menulist-button',
    meter: 'meter',
    none: 'none',
    progressBar: 'progress-bar',
    pushButton: 'push-button',
    radio: 'radio',
    searchfield: 'searchfield',
    sliderHorizontal: 'slider-horizontal',
    squareButton: 'square-button',
    textarea: 'textarea',
    textfield: 'textfield'
  },
  
  // Set Aspect Ratio Of Element
  aspectRatio: {
    auto: 'auto',
    custom: (horizontal, vertical) => {
      return `${horizontal} / ${vertical}`
    }
  },

  // Valid Backface Visibility Of CSS
  backfaceVisibility: {
    hidden: 'hidden',
    visible: 'visible'
  },

  // Valid Background Attachment Of CSS
  backgroundAttachment: {
    fixed: 'fixed',
    local: 'local',
    scroll: 'scroll'
  },

  // Valid Background Blend Mode Of CSS
  backgroundBlendMode: {
    color: 'color',
    colorDodge: 'color-dodge',
    darken: 'darken',
    lighten: 'lighten',
    luminosity: 'luminosity',
    multiply: 'multiply',
    normal: 'normal',
    overlay: 'overlay',
    saturation: 'saturation',
    screen: 'screen'
  },

  // Valid Background Clip Of CSS
  backgroundClip: {
    borderBox: 'border-box',
    contentBox: 'content-box',
    paddingBox: 'padding-box',
    text: 'text'
  },
  
  backgroundOffset: {
    bottom: 'bottom',
    center: 'center',
    left: 'left',
    right: 'right',
    top: 'top'
  },
  
  backgroundOrigin: {
    borderBox: 'border-box',
    contentBox: 'content-box',
    paddingBox: 'padding-box'
  },
  
  backgroundPosition: (x, y) => {
    return `${x} ${y}`
  },
  
  backgroundRepeat: {
    noRepeat: 'no-repeat',
    repeat: 'repeat',
    repeatX: 'repeat-x',
    repeatY: 'repeat-y',
    round: 'round',
    space: 'space'
  },
  
  backgroundSize: {
    auto: 'auto',
    contain: 'contain',
    cover: 'cover'
  },

  // Set Border Of Element
  border: (width, style, color = '') => {
    return `${borderWidth} ${borderStyle} ${borderColor}`
  },

  // Valid Border Collapse Of CSS
  borderCollapse: {
    collapse: 'collapse',
    separate: 'separate'
  },
  
  borderImage: (source = 'none', slice = '100%', width = 1, outset = 0, repeat = 'stretch') => {
    return `${source} ${slice} ${width} ${outset} ${repeat}`
  },
  
  borderImageRepeat: {
    repeat: 'repeat',
    round: 'round',
    space: 'space',
    stretch: 'stretch'
  },

  // Valid Border Style Of CSS
  borderStyle: {
    dashed: 'dashed',
    double: 'double',
    dotted: 'dotted',
    groove: 'groove',
    hidden: 'hidden',
    inset: 'inset',
    none: 'none',
    outset: 'outset',
    ridge: 'ridge',
    solid: 'solid'
  },

  // Valid Box Decoration Break Of CSS
  boxDecorationBreak: {
    clone: 'clone',
    slice: 'slice'
  },

  // Valid Box Reflect Of CSS
  boxReflect: {
    above: 'above',
    below: 'below',
    left: 'left',
    none: 'none',
    right: 'right'
  },

  // Set Box Shadow Of Element
  boxShadow: (offsetX, offsetY, blur = 0, spread = 0, color = '', inset = '') => {
    return `${offsetX} ${offsetY} ${blur} ${spread} ${color} ${inset}`
  },
  
  breakBeforeAfter: {
    all: 'all',
    always: 'always',
    auto: 'auto',
    avoid: 'avoid',
    avoidColumn: 'avoid-column',
    avoidPage: 'avoid-page',
    avoidRegion: 'avoid-region',
    column: 'column',
    left: 'left',
    page: 'page',
    recto: 'recto',
    region: 'region',
    right: 'right',
    verso: 'verso'
  },
  
  breakInside: {
    auto: 'auto',
    avoid: 'avoid',
    avoidColumn: 'avoid-column',
    avoidPage: 'avoid-page',
    avoidRegion: 'avoid-region'
  },

  // Valid Caption Side Of CSS
  captionSide: {
    bottom: 'bottom',
    top: 'top'
  },

  // Valid Clear Of CSS
  clear: {
    both: 'both',
    left: 'left',
    none: 'none',
    right: 'right'
  },
  
  // Valid Clip Path Of CSS
  clip: {
    auto: 'auto',
    rect: (top, right, bottom, left) => {
      return `rect(${top}, ${right}, ${bottom}, ${left})`
    }
  },

  // Uncompleted
  clipPath: {
    borderBox: 'border-box',
    contentBox: 'content-box',
    fillBox: 'fill-box',
    marginBox: 'margin-box',
    none: 'none',
    paddingBox: 'padding-box',
    strokeBox: 'stroke-box',
    url: link => {
      return StyleSheet.units.url(link);
    },
    viewBox: 'view-box'
  },

  // Valid Column Fill Of CSS
  columnFill: {
    auto: 'auto',
    balance: 'balance'
  },

  // Set Column Rule Of Element
  columnRule: (width, style, color) => {
    return `${width} ${style} ${color}`
  },

  // Valid Column Span Of CSS
  columnSpan: {
    all: 'all',
    none: 'none'
  },

  // Set Columns Of Element
  columns: (width, count) => {
    return `${width} ${count}`
  },
  
  colors: {
    // Call CMYK Color Of CSS
    cmyk: (cyan, magenta, yellow, black) => {
      const red = 255 * (1 - JavaScript.percent(cyan)) * (1 - JavaScript.percent(black))
      const green = 255 * (1 - JavaScript.percent(magenta)) * (1 - JavaScript.percent(black))
      const blue = 255 * (1 - JavaScript.percent(yellow)) * (1 - JavaScript.percent(black))
      return `rgb(${red}, ${green}, ${blue})`
    },
    
    // Call Hex Color Of CSS
    hex: hexadecimal => {
      return `#${hexadecimal}`
    },
  
    // Call HSL Color Of CSS
    hsl: (hue, saturation, lightness) => {
      return `hsl(${hue}, ${saturation}, ${lightness})`
    },
  
    // Call HSLA Color Of CSS
    hsla: (hue, saturation, lightness, alpha = 1) => {
      return `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`
    },
    
    // Call RGB Color Of CSS
    rgb: (red, green, blue) => {
      return `rgb(${red}, ${green}, ${blue})`
    },
    
    // Call RGBA Color Of CSS
    rgba: (red, green, blue, alpha = 1) => {
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`
    },
  },
  
  // Compile CSS Rules Into CSS
  compile: rules => {
    Object.entries(rules).forEach(item => {
      const [selector, declare] = item
      const getElement = document.querySelectorAll(selector)
      getElement.forEach(element => {
        Object.entries(declare).forEach(query => {
          const [property, value] = query
          element.style.setProperty(property, value)
        })
      })
    })
  },

  content: {

  },

  // Valid Cursor Of CSS
  cursor: {
    alias: 'alias',
    allScroll: 'all-scroll',
    auto: 'auto',
    cell: 'cell',
    colResize: 'col-resize',
    contextMenu: 'contect-menu',
    copy: 'copy',
    crosshair: 'crosshair',
    default: 'default',
    eResize: 'e-resize',
    ewResize: 'ew-resize',
    grab: 'grab',
    grabbing: 'grabbing',
    help: 'help',
    move: 'move',
    nResize: 'n-resize',
    neResize: 'ne-resize',
    neswResize: 'nesw-resize',
    nsResize: 'ns-resize',
    nwResize: 'nw-resize',
    nwseResize: 'nwse-resize',
    noDrop: 'no-drop',
    none: 'none',
    notAllowed: 'not-allowed',
    pointer: 'pointer',
    progress: 'progress',
    rowResize: 'row-resize',
    sResize: 's-resize',
    seResize: 'se-resize',
    swResize: 'sw-resize',
    text: 'text',
    url: '',
    verticalText: 'vertical-text',
    wResize: 'w-resize',
    wait: 'wait',
    zoomIn: 'zoom-in',
    zoomOut: 'zoom-out'
  },

  // Valid Direction Of CSS
  direction: {
    ltr: 'ltr',
    rtl: 'rtl'
  },

  // Valid Display Of CSS
  display: {
    block: 'block',
    contents: 'contents',
    flex: 'flex',
    flowRoot: 'flow-root',
    grid: 'grid',
    inline: 'inline',
    inlineBlock: 'inline-block',
    inlineFlex: 'inline-flex',
    inlineGrid: 'inline-grid',
    inlineTable: 'inline-table',
    listItem: 'list-item',
    none: 'none',
    runIn: 'run-in',
    table: 'table',
    tableCaption: 'table-caption',
    tableCell: 'table-cell',
    tableColumn: 'table-column',
    tableColumnGroup: 'table-column-group',
    tableFooterGroup: 'table-footer-group',
    tableHeaderGroup: 'table-header-group',
    tableRow: 'table-row',
    tableRowGroup: 'table-row-group'
  },

  emptyCells: {
    hide: 'hide',
    show: 'show'
  },

  // Valid Float Of CSS
  float: {
    both: 'both',
    left: 'left',
    none: 'none',
    right: 'right'
  },

  // Valid Isolation Of CSS
  isolation: {
    auto: 'auto',
    isolate: 'isolate'
  },
  
  // Fetch Internal Resources
  fetch: function(selector) {
    return this.resources[selector]
  },

  // Set Filter Of Element
  filter: {
    blur: strength => {
      return `blur(${StyleSheet.px(strength)})`
    },
    brightness: strength => {
      return `brightness(${StyleSheet.units.percent(strength)})`
    },
    contrast: strength => {
      return `contrast(${StyleSheet.units.percent(strength)})`
    },
    dropShadow: '',
    grayscale: strength => {
      return `grayscale(${StyleSheet.units.percent(strength)})`
    },
    hueRotate: strength => {
      return `hue-rotate(${StyleSheet.units.degrees(strength)})`
    },
    invert: strength => {
      return `invert(${StyleSheet.units.percent(strength)})`
    },
    opacity: strength => {
      return `opacity(${StyleSheet.units.percent(strength)})`
    },
    saturate: strength => {
      return `saturate(${StyleSheet.units.percent(strength)})`
    },
    sepia: strength => {
      return `sepia(${StyleSheet.units.percent(strength)})`
    }
  },

  flex: (grow, shrink = 1, basis = 'auto') => {
    return `${grow} ${shrink} ${basis}`
  },

  flexDirection: {
    column: 'column',
    columnReverse: 'column-reverse',
    row: 'row',
    rowReverse: 'row-reverse'
  },

  flexFlow: (direction, wrap) => {
    return `${direction} ${wrap}`
  },

  flexWrap: {
    noWrap: 'no-wrap',
    wrap: 'wrap',
    wrapReverse: 'wrap-reverse'
  },

  fontFamily: {
    cursive: 'cursive',
    fantasy: 'fantasy',
    monospace: 'monospace',
    sansSerif: 'sans-serif',
    serif: 'serif'
  },

  fontFeatureSettings: {

  },

  fontKerning: {
    auto: 'auto',
    normal: 'normal'
  },
  
  // Call Media Query Of CSS
  mediaQuery: query => {
    return window.matchMedia(query).matches
  },

  // Merge External Resources Into Internal Resources
  merge: function(rule) {
    this.resources = Object.assign(this.resources, rule)
  },

  // Valid Object Fit Of CSS
  objectFit: {
    contain: 'contain',
    cover: 'cover',
    fill: 'fill',
    none: 'none',
    scaleDown: 'scale-down'
  },
  
  // Valid Position Of CSS
  position: {
    absolute: 'absolute',
    fixed: 'fixed',
    relative: 'relative',
    static: 'static',
    sticky: 'sticky'
  },
  
  // Internal Resources
  resources: new Object(),

  // Valid Table Layout Of CSS
  tableLayout: {
    auto: 'auto',
    fixed: 'fixed'
  },
  
  units: {
    // Relative To The Width Of The Zero (Length Unit)
    ch: length => {
      return `${length}ch`
    },
    
    // Centimeters Length Unit
    cm: length => {
      return `${length}cm`
    },
    
    degrees: value => {
      return `${value}deg`
    },
    
    // Relative To The Font Size Of The Element (Length Unit)
    em: length => {
      return `${length}em`
    },
    
    // Relative To The X-Height Of The Current Font (Length Unit)
    ex: length => {
      return `${length}ex`
    },
    
    // Inches Length Unit
    inch: length => {
      return `${length}in`
    },
    
    // Inherits A CSS Property From It's Parent Element.
    inherit: 'inherit',
  
    // Set A CSS Property To It's Default Value
    initial: 'initial',
    
    // Millimeters Length Unit
    mm: length => {
      return `${length}mm`
    },
    
    // Milisecond Time Unit
    ms: time => {
      return `${time}ms`
    },
    
    // Picas Length Unit
    pc: length => {
      return `${length}pc`
    },
    
    // Relative To The Parent Element (Length  Unit)
    percent: value => {
      return `${value}%`
    },
    
    // Points Length Unit
    pt: length => {
      return `${length}pt`
    },
    
    // Pixels Length Unit
    px: length => {
      return `${length}px`
    },
    
    // Relative To Font Size Of The Root Element (Length Unit)
    rem: length => {
      return `${length}rem`
    },
    
    revert: 'revert',
    
    revertLayer: 'revert-layer',
    
    // Second Time Unit
    sec: time => {
      return `${time}s`
    },
    
    // Relative To 1% Of The Height Of The Viewport
    vh: length => {
      return `${length}vh`
    },
    
    // Relative To 1% Of Viewport's Larger Dimension
    vmax: length => {
      return `${length}vmax`
    },
    
    unset: 'unset',
    
    url: link => {
      return `url(${link})`
    },
    
    // Relative To 1% Of Viewport's Smaller Dimension
    vmin: length => {
      return `${length}vmin`
    },
    
    // Relative To 1% Of The Width Of The Viewport
    vw: length => {
      return `${length}vw`
    }
  },

  // Valid Visibility Of CSS
  visibility: {
    collapse: 'collapse',
    hidden: 'hidden',
    visible: 'visible'
  },
  
  // Valid Weight Of CSS
  weights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900
  }
  
}

JavaScript.load(() => {
  // Compile StyleSheet Resources Into CSS
  StyleSheet.compile(StyleSheet.resources)
})

// Resource Default
StyleSheet.merge({
  '.absolute': {
    'position': 'absolute'
  },
  '.aspect-auto': {
    'aspect-ratio': 'auto'
  },
  '.aspect-square': {
    'aspect-ratio': '1 / 1'
  },
  '.aspect-potrait': {
    'aspect-ratio': '9 / 16'
  },
  '.aspect-landscape': {
    'aspect-ratio': '16 / 9'
  },
  '.bg-blue': {
    'background-color': StyleSheet.colors.hex('0F6FFF')
  },
  '.box-border': {
    'box-sizing': 'border-box'
  },
  '.box-content': {
    'box-sizing': 'content-box'
  },
  '.border-collapse': {
    'border-collapse': 'collapse'
  },
  '.border-separate': {
    'border-collapse': 'separate'
  },
  '.clear-both': {
    'clear': 'both'
  },
  '.clear-left': {
    'clear': 'left'
  },
  '.clear-none': {
    'clear': 'none'
  },
  '.clear-right': {
    'clear': 'right'
  },
  '.container': {
    'max-width': StyleSheet.units.percent(100),
    'width': StyleSheet.units.percent(100)
  },
  '.container-sm': {
    'max-width': StyleSheet.mediaQuery('(min-width: 576px)') ? StyleSheet.units.px(540) : StyleSheet.units.percent(100),
    'width': StyleSheet.units.percent(100)
  },
  '.container-md': {
    'max-width': StyleSheet.mediaQuery('(min-width: 768px)') ? StyleSheet.units.px(720) : StyleSheet.units.percent(100),
    'width': StyleSheet.units.percent(100)
  },
  '.container-lg': {
    'max-width': StyleSheet.mediaQuery('(min-width: 992px)') ? StyleSheet.units.px(960) : StyleSheet.units.percent(100),
    'width': StyleSheet.units.percent(100)
  },
  '.container-xl': {
    'max-width': StyleSheet.mediaQuery('(min-width: 1200px)') ? StyleSheet.units.px(1140) : StyleSheet.units.percent(100),
    'width': StyleSheet.units.percent(100)
  },
  '.container-2xl': {
    'max-width': StyleSheet.mediaQuery('(min-width: 1400px)') ? StyleSheet.units.px(1320) : StyleSheet.units.percent(100),
    'width': StyleSheet.units.percent(100)
  },
  '.fixed': {
    'position': 'fixed'
  },
  '.font-mono': {
    'font-family': 'monospace'
  },
  '.font-sans': {
    'font-family': 'sans-serif'
  },
  '.font-serif': {
    'font-family': 'serif'
  },
  '.mx-auto': {
    'margin': '0 auto'
  },
  '.relative': {
    'position': 'relative'
  },
  '.static': {
    'position': 'static'
  },
  '.sticky': {
    'position': 'sticky'
  },
  '.text-white': {
    'color': 'white'
  }
})