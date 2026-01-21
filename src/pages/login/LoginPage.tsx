import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import styles from './LoginPage.module.css';
import { useLoginMutation } from '@/features/auth/api/auth.api';
import { Button, Input } from '@/shared/ui/components';
import { ROUTES } from '@/shared/config/router/routes';
import { Header } from '@/widgets/Header';

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      setServerError(null);
      await login(data).unwrap();
      navigate('/');
    } catch (err: any) {
      // Safely extract message which might be string or array
      const msg = err.data?.message;
      setServerError(Array.isArray(msg) ? msg[0] : typeof msg === 'string' ? msg : 'Invalid credentials');
    }
  };

  return (
    <>
      <Header/>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.logo}>
              Y
            </div>
            <h1 className={styles.title}>Добро пожаловать!</h1>
          </div>

          {serverError && (
            <div className={styles.error}>
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }
              })}
              error={errors.email?.message as string}
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              {...register('password', { 
                required: 'Password is required',
                minLength: { value: 8, message: 'Minimum 8 characters' }
              })}
              error={errors.password?.message as string}
            />

            <Button type="submit" isLoading={isLoading}>
              Войти <LogIn className={styles.buttonIcon} />
            </Button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Еще нет аккаунта?{' '}
              <Link to="/register" className={styles.footerLink}>
                Зарегистрироваться
              </Link>
            </p>
          </div>
          <NavLink to={ROUTES.MAIN} style={{textAlign: 'center', paddingTop: 20,}}>
              <p>На главную</p>
          </NavLink>
        </div>
        
      </div>
    </>
  );
};