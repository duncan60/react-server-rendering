import React from 'react';
import BaseComponent from '../base-component';
import CommonChild from '../common/common-child';
class Page extends BaseComponent {
    constructor(props) {
        super(props);
        this._bind(
        	'_testClick'
        );
    }
    _testClick() {
		console.log('pageB click');
	}
    render() {
        return (
            <div>
				Hello PageB!!!
				<CommonChild />
				<a onClick={this._testClick}> click me</a>
			</div>
        );
    }
}

export default Page;
