import ContentContainer from "@/components/content-container";
import { Card, CardContent } from "@/components/ui/card";
import DiscordIcon from "./discord-icon";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const JoinUs = () => {
  return (
    <ContentContainer variant="secondary">
      <div className="w-full flex flex-col items-center justify-center py-32">
        <Card className="w-full max-w-md mx-auto overflow-hidden">
          <CardContent className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <div className="space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto">
                <DiscordIcon />
              </div>
              <h2 className="text-3xl font-bold text-center">Join Our Community!</h2>
              <p className="text-center text-indigo-100">
                Connect with like-minded individuals, get support, contribute to our open source development, nerd out!
              </p>
              <div className="pt-4">
                <Button
                  className="w-full bg-white text-indigo-600 hover:bg-indigo-100 transition-colors duration-300"
                  size="lg"
                  asChild
                >
                  <Link href="https://discord.gg/Qza7QH8"> Join our Discord Server</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ContentContainer>
  );
};

export default JoinUs;
