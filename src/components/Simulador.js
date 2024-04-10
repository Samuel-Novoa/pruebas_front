import { Form, Input, Select, Button } from 'antd';

const Simulador = () => {

     const { Option } = Select;
     const [form] = Form.useForm();

     const handleSubmit = () => {
          alert('submitted teachers');
     };

     const onFinish = (values) => {
          console.log(values)
     };

     const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
     };

     const validateEmail = (rule, value, callback) => {
          if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
               callback('Invalid email address');
          } else {
               callback();
          }
     };

     return (
          <div className='flex h-screen items-center justify-center'>
               <div className='container mx-auto px-4'>
                    <div className='sm max-w-640 mx-auto w-full rounded-lg bg-white p-1 shadow-md'>
                         <Form
                              className='p-4 sm:p-6'
                              style={{ width: '95%' }}
                              form={form}
                              onFinish={onFinish}
                              onFinishFailed={onFinishFailed}
                              layout="vertical"
                         >
                              {/* Humedad Inicial */}
                              <Form.Item
                                   label="Humedad Inicial"
                                   name="humedad_incial"
                                   rules={[{ required: true, message: 'Se requiere la humedad inicial!' }]}
                              >
                                   <Input />
                              </Form.Item>

                              {/* Humedad Deseada */}
                              <Form.Item
                                   label="Humedad Deseada"
                                   name="humedad_deseada"
                                   rules={[{ required: true, message: 'Se requiere la humedad deseada!' }]}
                              >
                                   <Input />
                              </Form.Item>

                              {/* Flujo Trigo */}
                              <Form.Item
                                   label="Flujo Trigo"
                                   name="flujo_trigo"
                                   rules={[{ required: true, message: 'Se requiere el flujo de trigo!' }]}
                              >
                                   <Input />
                              </Form.Item>

                              {/* Temperatura Inicial */}
                              <Form.Item
                                   label="Temperatura Inicial"
                                   name="temperatura_inicial"
                                   rules={[{ required: true, message: 'Se requiere la temperatura inicial!' }]}
                              >
                                   <Input />
                              </Form.Item>

                              {/* Temperatura Final */}
                              <Form.Item
                                   label="Temperatura Final"
                                   name="temperatura_final"
                                   rules={[{ required: true, message: 'Se requiere la temperatura final!' }]}
                              >
                                   <Input />
                              </Form.Item>

                              {/* Calor Especifico Trigo */}
                              <Form.Item
                                   label="Calor Especifico Trigo"
                                   name="calor_especifico"
                                   rules={[{ required: true, message: 'Se requiere el calor especifico!' }]}
                              >
                                   <Input />
                              </Form.Item>

                              {/* Entelpia Vaporizacion Agua */}
                              <Form.Item
                                   label="Entalpia Vaporizacion Agua"
                                   name="entalpia_vaporizacion_agua"
                                   rules={[{ required: true, message: 'Se requiere la entalpia de vaporizacion del agua!' }]}
                              >
                                   <Input />
                              </Form.Item>

                              <Form.Item>
                                   <Button className='custom_btn' type="primary" htmlType="submit">
                                        Enviar
                                   </Button>
                              </Form.Item>
                         </Form>
                    </div>
               </div>
          </div>
     );
};

export default Simulador;