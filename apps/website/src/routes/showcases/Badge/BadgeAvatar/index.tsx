import { SfBadge } from 'qwik-storefront-ui';

export default function BadgeAvatar() {
  return (
    <ul>
      <li class="flex items-center mb-2">
        <div class="relative">
          <img src="/images/woman_avatar.png" alt="Avatar of a woman" width="36" height="36" />
          <SfBadge variant="dot" placement="bottom-right" class="!bg-primary-600 outline outline-white" />
        </div>
      </li>
      <li class="flex items-center">
        <div class="relative">
          <img src="/images/woman_avatar.png" alt="Avatar of a woman" width="36" height="36" />
          <SfBadge variant="dot" placement="bottom-right" class="!bg-neutral-600 outline outline-white" />
        </div>
      </li>
    </ul>
  );
}