import styled from "@emotion/styled";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
 
`;

export const AuthFormCard = styled.div`
  display: block;
  padding: 25px 35px 50px;
  width: 450px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const FormTitle = styled.h2`
text-align: center;
margin: 0 0 40px;
font-size: 24px;
font-weight: 300;
`
export const AuthHelperText = styled.p`
  color: rgba(80, 78, 78, 0.76);
`;