import '../css/Counter.css';

export default function Counter({ clicksNum }){
    return (
        <div className="counter">
            {clicksNum}
        </div>
    );
}