import { component$ } from "@builder.io/qwik";

interface AvatarProps {
  src: string;
  alt?: string;
}

export const Avatar = component$<AvatarProps>(({ src, alt }) => {
  return (
    <div class="h-[40px] w-[40px]">
      <img class="qwik-avatar" src={src} alt={alt} width={40} height={40} />
    </div>
  );
});
