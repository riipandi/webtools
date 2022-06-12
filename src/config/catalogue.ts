import { IconCloudComputing, IconKey, IconKeyOff } from '@tabler/icons'

export default [
  {
    slug: 'bcrypt',
    title: 'Bcrypt',
    description:
      'Hash and compare text string using bcrypt. Bcrypt is a password-hashing function based on the Blowfish cipher.',
    icon: IconKey,
  },
  {
    slug: 'token-generator',
    title: 'Token Generator',
    description:
      'Generate random string with the chars you want: uppercase or lowercase letters, numbers and/or symbols.',
    icon: IconKeyOff,
  },
  {
    slug: 'base64-converter',
    title: 'Base64 converter',
    description: "Convert string, files or images into a it's base64 representation.",
    icon: IconCloudComputing,
  },
]
