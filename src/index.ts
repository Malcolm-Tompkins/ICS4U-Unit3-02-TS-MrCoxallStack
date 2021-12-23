/*
* This program adds pop to the MrCoxallStack program
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2021-12-14
*/

class MrCoxallStack {
    private aStack : number[] = []

    public getStack () {
        // getter for the stack
        return this.aStack
    }

    public push (pushNumber: number) {
        // method for pushing numbers into the stack
        this.aStack = [pushNumber, ...this.aStack];
    }

    public showStack () {
        // method for printing the stack
        console.log("The stack contains: ")
        for (var val of this.aStack.reverse()) {
            console.log(val)
        }
    }

    public pop (): number {
        // method for popping number on the stack
        const poppedNumber = this.aStack[
            this.aStack.length - (this.aStack.length - 1)]
        const index = this.aStack.indexOf(this.aStack.length - 1, 0);
        this.aStack.splice(index, 1);
        return poppedNumber
    }
}

const stack = new MrCoxallStack()

console.log('Empty stack:')

console.log("Push 100:")
stack.push(100)
console.log("Push 10:")
stack.push(10)
stack.showStack()
var popNum: number = stack.pop()
console.log("The popped number is: " + popNum)
stack.showStack()

console.log('\nDone.')
