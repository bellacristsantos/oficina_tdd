const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    queue.add("a")
    queue.add("b")
    queue.add("c")
    queue.add("d")
    expect(queue.size()).toBe(4)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.add("n")
    expect(queue.elements).toEqual(["n"])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add("primeiro")
    queue.add("segundo")
    queue.add("terceiro")
    queue.add("quarto")
    expect(queue.peek()).toBe("primeiro")
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add("primeiro")
    queue.add("segundo")
    queue.add("terceiro")
    queue.add("quarto")
    const removed = queue.dequeue()
    expect(removed).toBe("primeiro")
    expect(queue.elements).toEqual(["segundo", "terceiro", "quarto"])
  })
})