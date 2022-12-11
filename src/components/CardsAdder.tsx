
import '../CSS/App.css';



export const CardAdder: React.FC = () => {


    return (
        <div className='wordAdder'>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button type='submit'>Добавить</button>
                </div>
            </div>
    )
}