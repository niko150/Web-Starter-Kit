import gulp from 'gulp';
import { env } from 'gulp-util';

import { DIST_ROOT } from '../constants';
import { ServiceWorker } from '../utils';

gulp.task('precache', done => {
  new ServiceWorker(DIST_ROOT, (env.prod), done);
});
