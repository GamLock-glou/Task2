import { PureComponent } from 'react';
import './ProgressBar.style'

class ProgressBar extends PureComponent {
    render() {
        let checkProgressBar = true;
        const keys = Object.keys(this.props.step);
        const idx = keys.findIndex(key => key === this.props.checkoutStep);
        const a = 100 / keys.length;
        console.log(a);
        return ( <div className='ProgressBar'>
            {/* Здесь говнокод, т.к. 2 часа ночи, хочу спать) */}
            <div className='progress' style={{ width: `${a * (idx+1)}%` }} id='progress'></div>
                {keys.map((key,index) => {
                    const className = !checkProgressBar ? 'ProgressStep' : 'ProgressStep ProgessStepActive'
                    if(key === this.props.checkoutStep)
                        checkProgressBar = false;
                    if(index !== keys.length-1)
                        return <div 
                            key={index}
                            style={{ left: `${a * (index + 1)}%` }}
                            className={className} 
                            data-title={this.props.step[key].title.value}>
                                {!checkProgressBar ? index+1: `✓`}
                            </div>
                    
                })}
            </div>
        );
    }
}

export default ProgressBar;