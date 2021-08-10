---
title: flatMapDeep
nav:
  title: Components
  path: /components
---

# flatMapDeep

平铺任意字段的数组。

## 代码演示

### 基础用法

<!-- <code src="./demo/demo1.tsx" /> -->

## API

```typescript
const arr = [{ name: '名称', children: [{ name: '子名称', children: [] }] }]
const newArray = flatMapDeep(arr)
console.log(newArray) 
// [
//   { name: '名称', children: []]
//   { name: '子名称', children: []}
// ]
```

### Params

| 参数  | 说明           | 类型     | 默认值     |
| ----- | -------------- | -------- | ---------- |
| array | 要平铺的数组   | `T[]`    | -          |
| field | 根据此字段平铺 | `string` | `children` |
