import { UserProfile, auth } from "@clerk/nextjs";
import { fetchUserTokensById } from "@/utils/actions";

export default async function ProfilePage() {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);
  return (
    <div>
      <h2 className="mb-8 ml-8 text-xl font-extrabold">
        Token Amount : {currentTokens}
      </h2>
      <UserProfile />
    </div>
  );
}
