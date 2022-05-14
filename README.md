### 基于Vue Componsition API，封装了一些通用hook，为提升发开效率

+ 介绍

封装了一些通用的hooks，将会大大的提高开发效率，使你的代码更具有可读性

+ 安装

```
pnpm i @akar/vue-hooks 或 npm i @akar/vue-hooks
```

+ useState

```
import { useState } from '@akar/vue-hooks'

const [count, setCount] = useState(0);

setCount(1) // count = 1 
setCount(() => 100) // count = 100
setCount((count) => count.value + 1) // count = 101

```

+ useReducer

```
import { useReducer } from '@akar/vue-hooks'

const [count, countDispatch] = useReducer((count, { type, payload }) => {
  switch (type) {
    case "add":
      count.value = count.value + payload;
      break;
    case "reduce":
      count.value = count.value - payload;
      break;
  }
}, 100);

countDispatch({ type: 'add', payload: 3 }) // count = 103

countDispatch({ type: 'reduce', payload: 10 }) // count = 100

```


+ 建议

@akar/vue-hooks封装了一些基础的hooks，也将会提供一些稍微带有复杂度的通用hooks，可以不认可，但一定要会写这些hooks！此插件正在不断完善中

[vue响应式基础学习点击这里](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive "Vue3")