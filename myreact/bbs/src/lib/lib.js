import { useState } from 'react'
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handler = (event) => {
        setValue(event.target.value);
    }
    return [value, handler];
}
