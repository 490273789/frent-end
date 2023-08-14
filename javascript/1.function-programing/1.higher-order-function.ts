// const a: { b: Number, c: number } = [{
//   b: 1,
//   c: 2,
// }];

// const z = a.map( e => ({
//   ...e,
//   c: false
// }))

// const extractReplaceSchemeData = () => (projectData.value.reduce((item, pre) => {
//     if (item.checked && checkedScheme.value) item.schemeId = checkedScheme.value
//     if (item.schemeId || item.schemeId == 0)  pre.push({
//       projectId: item.id,
//       schemeId: item.schemeId
//     })
//     return pre
//   } , [] as SchemeReplaceItem[]))


// const extractReplaceSchemeData = () => (projectData.value.reduce((item, pre) => (
//   item.checked && checkedScheme.value && (item.schemeId = checkedScheme.value),
//   (item.schemeId || item.schemeId == 0) && pre.push({
//     projectId: item.id,
//     schemeId: item.schemeId
//   }),pre
//  ) , [] as SchemeReplaceItem[]))