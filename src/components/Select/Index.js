import './Select.css'

const Index = (properties) => {
    return (
        <div>
            <label>
                {properties.label}
            </label>
            <select>
                {
                    properties.items.map(item => {
                        return <option key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Index;