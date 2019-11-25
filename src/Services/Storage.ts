export class Storage <T> {
    
    private key: string
    private value: T | null = null

    constructor (key: string) {
        this.key = key
        this.value = this.getValue()
    }

    getValue (): T | null {
        const stringValue = window.localStorage.getItem(this.key)
        if (!stringValue) return null
        try {
            const value = JSON.parse(stringValue)
            return value
        } catch (error) {
            console.warn(new Error(`Storage Service: ${error}`))
            return null
        }
    }

    setValue (value: T) {
        this.value = value
        window.localStorage.setItem(this.key, JSON.stringify(this.value))
    }
}