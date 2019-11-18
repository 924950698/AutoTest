import { add, minus } from './math.js';

test('测试加法 3 + 7', () => {
    expect(add(3, 7)).toBe(10)
})

test('测试减法 3 - 3', () => {
    expect(minus(3, 3)).toBe(0)
})

//jest框架在前端帮助我们完成的是两类的内容：单元测试（单个模块测试）， 集成测试（多个模块测试）
