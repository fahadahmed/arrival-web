import { createLazyFileRoute } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';

const Attendance = lazy(() => import('attendance/Attendance'));


function AttendanceApp() {
  return <Suspense fallback="Loading..."><Attendance /></Suspense>;
}

export const Route = createLazyFileRoute('/attendance')({
  component: AttendanceApp,
});