import { PureComponent } from 'react';
import '../ProgressBar.style'

class Step extends PureComponent {
    render() {
        const {title, value, active, style, done} = this.props;
        const className = active ? 'ProgressStep' : 'ProgressStep ProgessStepActive';
        return <div
            style={style}
            className={className}
            data-title={title}>
            {done ? value : `✓`}
        </div>

    }
}

export default Step;