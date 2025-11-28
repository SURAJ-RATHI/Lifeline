'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { userAuthStore } from '@/store/authStore';
import { User } from '@/lib/types';

const resolveRedirectPath = (user: User) => {
  if (!user.isVerified) {
    return `/onboarding/${user.type}`;
  }

  return user.type === 'doctor' ? '/onboarding/doctor' : '/onboarding/patient';
};

const AuthSuccessContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser, fetchProfile } = userAuthStore();

  useEffect(() => {
    const token = searchParams.get('token');
    const typeParam = searchParams.get('type');
    const userParam = searchParams.get('user');

    if (!token || !userParam) {
      router.replace('/auth/login/patient');
      return;
    }

    const bootstrap = async () => {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(userParam));
        const normalizedUser: User = {
          id: parsedUser.id,
          name: parsedUser.name || '',
          email: parsedUser.email || '',
          type: typeParam === 'doctor' ? 'doctor' : 'patient',
          profileImage: parsedUser.profileImage,
          phone: parsedUser.phone,
          isVerified: parsedUser.isVerified ?? false,
        };

        setUser(normalizedUser, token);

        router.replace(resolveRedirectPath(normalizedUser));

        try {
          await fetchProfile();
        } catch (error) {
          // Ignore profile fetch errors; we'll fall back to minimal data.
        }
      } catch (error) {
        router.replace('/auth/login/patient');
      }
    };

    bootstrap();
  }, [fetchProfile, router, setUser, searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <p className="text-lg font-semibold">Signing you in...</p>
      <p className="text-sm text-black/70 mt-2">
        Please wait while we redirect you to your dashboard.
      </p>
    </div>
  );
};

const AuthSuccessPage = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      }
    >
      <AuthSuccessContent />
    </Suspense>
  );
};

export default AuthSuccessPage;