import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Сайт в разработке
          </CardTitle>
          <CardDescription className="text-xl mt-4">
            Мы усердно работаем над созданием чего-то потрясающего
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Placeholder"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Скоро здесь появится что-то интересное. Оставайтесь на связи!
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Подписаться на обновления
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;