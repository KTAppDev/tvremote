/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/1m23UQftKyu
 */
import { Switch } from "@/components/ui/switch"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Remote() {
  return (
    <Card className="w-full max-w-xl mx-auto grid gap-4 bg-gray-100 dark:bg-gray-800">
      <CardHeader className="p-4 rounded-lg border dark:border-gray-700">
        <div className="grid items-center gap-4">
          <h2 className="text-lg font-bold tracking-tight text-gray-800 dark:text-gray-300">Remote Control</h2>
          <Switch />
        </div>
      </CardHeader>
      <CardContent className="p-4 rounded-lg grid gap-4">
        <div className="grid gap-2">
          <Button className="bg-blue-500 text-white dark:bg-blue-700 dark:text-white" size="sm" variant="outline">
            Netflix
          </Button>
          <Button className="bg-red-500 text-white dark:bg-red-700 dark:text-white" size="sm" variant="outline">
            YouTube
          </Button>
          <Button className="bg-green-500 text-white dark:bg-green-700 dark:text-white" size="sm" variant="outline">
            Prime Video
          </Button>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-2">
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Power
            </Button>
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Volume
            </Button>
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Channel
            </Button>
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Input
            </Button>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-2">
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Up
            </Button>
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Down
            </Button>
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Left
            </Button>
            <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
              Right
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
            Mute
          </Button>
          <Button className="bg-gray-500 text-white dark:bg-gray-700 dark:text-white" size="sm" variant="outline">
            Menu
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
