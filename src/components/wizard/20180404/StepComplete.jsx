import React from 'react';
import $ from 'jquery';
import { QRCode } from '../../qr-code';

class StepComplete extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    $('#prev-button').hide();
  }

  componentDidUpdate() {
    $('#prev-button').hide();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>提交成功！</h2>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <p>
                    工作人员会尽快的处理您的调查问卷，请耐心等候
                    <div>
                      您的调查问卷编号为：第{Number(this.props.getStore().seqNo)}号
                    </div>
                    <div>
                      您的微信商城ID为：{this.props.getStore().userId}
                    </div>
                    <div>
                      建议拍照本页面，或者牢记您的问卷编号！
                    </div>
                    <div>
                      本调查问卷前250人可以获得现金奖励，如您的问卷编号小于等于250，且2天内未收到现金奖励，请联系客服领取。
                    </div>
                    <div>
                      联系方式：
                    </div>
                    <ul>
                      <li>
                        QQ：3284883815（早9点至晚6点，无节假日）
                      </li>
                      <li>
                        电话：010-56315141（周一至周五早9点至晚6点）
                      </li>
                      <li>
                        邮件：kefu@renaijiance.com
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <QRCode/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

StepComplete.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default StepComplete;
