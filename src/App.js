import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SeccondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "やまなか",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  mail: "yamanaka@sample.com",
  phone: "000-0000-0000",
  company: {
    name: "やまなか構築代行会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
