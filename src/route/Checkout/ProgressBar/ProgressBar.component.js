import { PureComponent } from 'react';
import './ProgressBar.style'

class ProgressBar extends PureComponent {
    render() {
        const keys = Object.keys(this.props.step);
        const idx = keys.findIndex(key => key === this.props.checkoutStep);
        const onePontWidth = 100 / keys.length;
        return ( <div className='ProgressBar'>
            <div className='progress' style={{ width: `${onePontWidth * (idx+1)}%` }} id='progress'></div>
                {keys.map((key,index) => {
                    const className = index>=idx+1 ? 'ProgressStep' : 'ProgressStep ProgessStepActive'
                    if(index !== keys.length-1)
                        return <div 
                            key={index}
                            style={{ left: `${onePontWidth * (index + 1)}%` }}
                            className={className} 
                            data-title={this.props.step[key].title.value}>
                                {index>=idx ? index+1: `✓`}
                            </div>
                    
                })}
            </div>
        );
    }
}

export default ProgressBar;