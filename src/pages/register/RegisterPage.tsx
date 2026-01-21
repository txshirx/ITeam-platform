import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import styles from './RegisterPage.module.css';
import { useRegisterMutation } from '@/features/auth/api/auth.api';
import { Button, Input } from '@/shared/ui/components';
import { Header } from '@/widgets/Header';
import { ROUTES } from '@/shared/config/router/routes';

export const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [signUp, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  const password = watch('password');

  const onSubmit = async (data: any) => {
    try {
      setServerError(null);
      const { confirmPassword, ...submitData } = data;
      await signUp(submitData).unwrap();
      navigate('/');
    } catch (err: any) {
      const msg = err.data?.message;
      setServerError(Array.isArray(msg) ? msg[0] : typeof msg === 'string' ? msg : 'Registration failed');
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
            <h1 className={styles.title}>Присоединяйся к ITeam</h1>
          </div>

          {serverError && (
            <div className={styles.error}>
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              label="Username"
              placeholder="johndoe123"
              {...register('username', { 
                required: 'Username is required',
                minLength: { value: 3, message: 'Minimum 3 characters' },
                pattern: { value: /^[a-zA-Z0-9]+$/, message: 'Only letters and numbers' }
              })}
              error={errors.username?.message as string}
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
              })}
              error={errors.email?.message as string}
            />
            <div className={styles.passwordGrid}>
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                {...register('password', { 
                  required: 'Required',
                  minLength: { value: 8, message: 'Min 8 chars' },
                  pattern: { 
                    value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
                    message: 'Need: A-Z, 0-9, @$!' 
                  }
                })}
                error={errors.password?.message as string}
              />
              <Input
                label="Confirm"
                type="password"
                placeholder="••••••••"
                {...register('confirmPassword', { 
                  required: 'Required',
                  validate: value => value === password || 'Passwords must match'
                })}
                error={errors.confirmPassword?.message as string}
              />
            </div>

            <Button type="submit" isLoading={isLoading}>
              Создать аккаунт <UserPlus className={styles.buttonIcon} />
            </Button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Уже есть аккаунт?{' '}
              <Link to="/login" className={styles.footerLink}>
                Войти
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
