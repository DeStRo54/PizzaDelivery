import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useCancelPizzaOrderMutation } from '../../../utils/api/hooks/useCancelPizzaOrderMutation';

export const useCancelOrder = (orderId: string) => {
  const [isActive, setIsActive] = React.useState(false);
  const navigate = useNavigate();

  const backToOrders = () => {
    navigate('/orders');
  };

  const viewCancelAttention = () => {
    setIsActive(!isActive);
  };

  const cancelPizzaOrderMutation = useCancelPizzaOrderMutation();
  const cancelOrder = async () => {
    const cancelPizzaOrderResponse = await cancelPizzaOrderMutation.mutateAsync({
      params: {
        orderId
      }
    });

    if (cancelPizzaOrderResponse.data.reason) {
      setIsActive(!isActive);
      return alert(cancelPizzaOrderResponse.data.reason);
    }

    navigate('/orders');
  };

  return {
    isActive,
    functions: {
      backToOrders,
      viewCancelAttention,
      cancelOrder,
    }
  };
};
