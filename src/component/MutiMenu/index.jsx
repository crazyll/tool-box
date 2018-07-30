import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { autobind } from 'core-decorators';
import styles from './index.less';

@autobind
export default class MutiMenu extends React.PureComponent {
  static propTypes = {
    onOk: PropTypes.func,
    topLength: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      showSelectList: false,
      selectedPos: null,
      fixed: false
    };
    this.navBar = React.createRef();
    this.selectedBar.bind(this);
    this.onMaskClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if (!nextProps.showSelectList) {
      return {
        showSelectList: nextProps.showSelectList,
        selectedPos: null
      };
    }
    return {
      showSelectList: nextProps.showSelectList
    };
  }
  componentDidMount() {
    this.navBar.current.addEventListener('touchmove', (e) => {
      if (this.scrollChild) {
        const target = this.scrollChild;
        if (target.scrollTop < 5) {
          target.style.setProperty('touch-action', 'pan-down');
        } else if (target.offsetHeight + target.scrollTop + 5 >= target.scrollHeight) {
          target.style.setProperty('touch-action', 'pan-up');
        } else {
          target.style.setProperty('touch-action', 'auto');
        }
      } else {
        alert('not scroll node');
        e.preventDefault();
      }
    }, { passive: false });
  }
  onMaskClick() {
    this.setState({ showSelectList: false, selectedPos: null });
    this.props.onOk();
  }
  selectedBar(index) {
    this.navBar.current.scrollIntoView(true);
    this.scrollChild = null;
    const { selectedPos } = this.state;
    let { showSelectList } = this.state;
    if (index === selectedPos) {
      showSelectList = !showSelectList;
    } else {
      showSelectList = true;
    }
    this.setState({ showSelectList, selectedPos: index, fixed: true });
  }
  render() {
    const { children, topLength } = this.props;
    const { showSelectList, selectedPos, fixed } = this.state;
    // const Children = React.Children.map(children, (child) => child);
    return (
      <div
        className={styles['tab-select']}
        ref={this.navBar}
      >
        {showSelectList && (
          <Fragment>
            <div style={{ height: '2.57rem' }} />
            <div
              className={styles['menu-mask']}
              onClick={this.onMaskClick}
            />
          </Fragment>
        )}
        <header
          className={styles.fixed}
          style={{
            position: fixed ? 'fixed' : 'absolute',
            top: fixed ? '0px' : topLength
          }}
          onScroll={(e) => {
            console.log('bar head scroll pop');
            this.scrollChild = e.target;
          }}
        >
          <div className={styles['single-top-nav-bar']}>
            <div className={styles.box}>
              {React.Children.map(children, (item, index) => (
                <p
                  className={[
                    styles.item,
                    (selectedPos === index && showSelectList) ? styles['item-selected'] : ''
                  ].join(' ')}
                  onClick={() => this.selectedBar(index)}
                >
                  <span>{item.props.title}</span>
                </p>
              ))}
            </div>
            {selectedPos !== null && showSelectList && children[selectedPos]}
          </div>
        </header>
      </div>
    );
  }
}
