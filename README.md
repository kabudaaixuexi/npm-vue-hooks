### 基于Vue Componsition API，封装了一些通用hook

+ 介绍

使用vue-hooks库，提升开发效率，使代码更具有可读性

+ 安装

```
pnpm i @akar/vue-hooks 或 npm i @akar/vue-hooks
```

+ useState

```
<script lang="ts" setup>

import { useState } from '@akar/vue-hooks'

const [count, setCount] = useState(0);

setCount(1) // count = 1 

setCount(() => 100) // count = 100

setCount((count) => count.value + 1) // count = 101

</script>

```

+ useReducer

```
<script lang="ts" setup>

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

@akar/vue-hooks封装了一些基础的hook，会陆续提供更多的通用hook，建议每个vue开发者要能手写出来这些hooks，此插件在不断完善中

[vue响应式基础学习点击这里](https://v3.cn.vuejs.org/api/basic-reactivity.html#reactive "Vue3")