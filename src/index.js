import colors from 'colors';

export default function hello(user = 'World') {
  return `Hello ${user}!\n`.blue;
}

if (require.main === module) {
  process.stdout.write(hello());
}
