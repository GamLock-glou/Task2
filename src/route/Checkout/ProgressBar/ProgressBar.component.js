import { PureComponent } from 'react';
import './ProgressBar.style'
import Step from './Steps/Step.component';

class ProgressBar extends PureComponent {
    render() {
        const steps = Object.keys(this.props.steps);
        const currentStepIdx = steps.findIndex(key => key === this.props.checkoutStep);
        const onePointWidth = 100 / steps.length;
        return ( <div className='ProgressBar'>
            <div className='progress' style={{ width: `${this.getProgress(onePointWidth, currentStepIdx+1)}%` }} id='progress'></div>
                {steps.slice(0,-1).map((key,index) => {
                    return <Step
                        key={index}
                        style={{ left: `${this.getProgress(onePointWidth, index+1)}%` }}
                        title={this.props.steps[key].title.value}
                        value={index+1}
                        active={index>currentStepIdx}
                        done={index>=currentStepIdx}
                    />
                    
                })}
            </div>
        );
    }
    
    getProgress(width, currentStep) {
        return width * currentStep;
    }
}

export default ProgressBar;