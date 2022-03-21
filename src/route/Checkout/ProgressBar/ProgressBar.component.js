import { PureComponent } from 'react';
import './ProgressBar.style'

class ProgressBar extends PureComponent {
    render() {
        let checkProgressBar = true;
        const obj = {
            0: {width: "25%"},
            1: {width: "75%"},
            2: {width: "100%"}
        }
        let number = 0;
        const keys = Object.keys(this.props.step);
        keys.forEach((key, index) => {
            if(key === this.props.checkoutStep)
                number = index;
        })
        return ( <div className='ProgressBar'>
            {/* Здесь говнокод, т.к. 2 часа ночи, хочу спать) */}
            <div className='progress' style={obj[number]} id='progress'></div>
                {keys.map((key,index) => {
                    const className = !checkProgressBar ? 'ProgressStep' : 'ProgressStep ProgessStepActive'
                    if(key === this.props.checkoutStep)
                        checkProgressBar = false;
                    if(index != keys.length-1)
                        return <div 
                            key={index}
                            className={className} 
                            data-title={this.props.step[key].title.value}>
                        </div>
                    
                })}
            </div>
        );
    }
}

//25, 75, 100
export default ProgressBar;