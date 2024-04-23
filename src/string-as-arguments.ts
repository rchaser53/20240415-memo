import subDays from 'date-fns/subDays';
// 以下のようなフォーマットのstringを再びハンドリングするようにした(v1と同じようなハンドリングにした)
const day = subDays('2016-01-01' as any, 1);    // エラーが出力される
console.log(day)    // Invalid Date
