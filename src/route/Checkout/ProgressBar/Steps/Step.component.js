import { PureComponent } from 'react';
import '../ProgressBar.style'

class Step extends PureComponent {
    render() {
        const {index, title, done} = this.props;
        return <>
          <li className={this.activeStyle('line')}></li>
          <li className={this.activeStyle('progressItem')}>
            <div className={this.activeStyle('circleProgressItem')}>
              {done ? index : `✓`}
            </div>
            <div className='titleProgressItem'>{title}</div>
          </li>
        </>
        // const {title, value, active, style, done} = this.props;
        // const className = active ? 'ProgressStep' : 'ProgressStep ProgessStepActive';
        // return <div
        //     style={style}
        //     className={className}
        //     data-title={title}>
        //     {done ? value : `✓`}
        // </div>

    }
    activeStyle = (text) => {
      const {active} = this.props;
      if(active) return text + ` ${text}Active`;
      return text;
    }
}

export default Step;