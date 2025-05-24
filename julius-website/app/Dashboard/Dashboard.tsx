import PostForm from "../components/PostForm";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <PostForm />
      </div>
    </div>
  );
}