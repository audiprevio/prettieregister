import { Card, Col } from 'antd';
import { ReactNode } from 'react';

type CustomCardProps = {
  children: ReactNode;
};

const CustomCard = ({ children }: CustomCardProps) => {
  return (
    <Col xs={24} sm={24} md={18} lg={12} xl={14}>
      <Card style={{ 
        width: '30rem', 
        position: 'fixed', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        margin: '0', 
        backgroundColor: 'rgba(17, 40, 70, 0.25)', 
        backdropFilter: 'blur(10px)', 
        borderColor: '#182A41', 
        borderWidth: '0.5px'
      }}>
        {children}
      </Card>
    </Col>
  );
};

export default CustomCard;
