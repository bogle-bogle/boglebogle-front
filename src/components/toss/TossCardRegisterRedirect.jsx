import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Api from '../../api';

function TossCardRegisterRedirect() {
  const navigate = useNavigate();
  const member = useSelector(state => state.member);

  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const customerKey = params.get('customerKey');
    const authKey = params.get('authKey');

    Api.post(`/api/toss/cardregister`, {
      customerKey: customerKey,
      authKey: authKey,
    }).then(() => {
      navigate('/mypage?menu=mysubscription');
    });
  });
}

export default TossCardRegisterRedirect;
