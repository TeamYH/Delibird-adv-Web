import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import '../../css/contact.scss';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" gutterBottom>
        <div>딜리버드를 신청해주셔서 감사합니다!</div>
        <div>아래 양식을 모두 입력 후 제출하시면 1~2 영업일 이내에 도움을 받으실 수 있습니다.</div>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Name"
            name="Name"
            label="이름"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="연락처"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="이메일"
            fullWidth
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
        
        <Grid item xs={12}>
          <TextField
            id="Comment"
            name="Comment"
            label="문의 내용 (ex: 제품 문의)"
            fullWidth
          />
        </Grid>
      </Grid>
      <Paper className="paper-form">
        <div className="paper-form-header">개인정보 수집 이용 동의</div>
        <div className="paper-body-form"> 아래의 개인정보 처리에 관하여 동의하여 주시면, 귀하의 문의사항을 신속히 처리하여 드리겠습니다. </div>
        <div className="paper-body-form2">1. 개인정보 수집 및 이용목적 : 렌탈 상담 문의사항 관련 정보 제공</div>
        <div className="paper-body-form2">2. 개인정보 수집 필수 항목 : 이름, 연락처, 이메일</div>
        <div className="paper-body-form2">3. 개인정보 보유 및 이용기간 : 개인정보에 대한 삭제 요구 시 또는 개인정보 수집 및 이용 목적 달성 시</div>
        <div className="paper-body-form3"> *사용자는 이용 동의를 거부할 권리가 있으나, 동의 거부 시 딜리버드의 서비스를 받을 수 없습니다.*</div>
        <div className="confirm-checkbox"> 개인정보 수집 및 이용에 동의합니다. <Checkbox color="primary"/></div>
      </Paper>
    </React.Fragment>
  );
}