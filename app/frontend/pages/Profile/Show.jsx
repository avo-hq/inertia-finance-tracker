import {useForm} from "@inertiajs/react"

import DashboardLayout from "../../layouts/DashboardLayout";
import FormErrors from "../../components/FormErrors";
import TextInput from "../../components/TextInput";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";

const ProfileShow = ({user, errors}) => {
  const {patch, data, setData, processing} = useForm({
    username: user.username,
    email_address: user.email_address,
    avatar: user.avatar_url,
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    patch("/profile", {
      preserveScroll: true,
      data: data
    })
  }

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="text-zinc-600">Edit your profile information</p>

      <div className="mt-4">
        <form onSubmit={handleSubmit} className="max-w-1/2">
          <FormErrors errors={errors} />
          <div className="space-y-4">
            <FormGroup>
              <TextInput
                name="email_address"
                label="Email address"
                value={data.email_address}
                onChange={e => setData("email_address", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextInput
                name="username"
                label="Username"
                value={data.username}
                onChange={e => setData("username", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <TextInput 
                name="password" 
                label="Password" 
                type="password" 
                value={data.password}
                onChange={e => setData("password", e.target.value)}
              />
            </FormGroup>
          </div>

          <Button type="submit" isLoading={processing} className="mt-5" size="sm">
            Update profile
          </Button>
        </form>
      </div>
    </div>
  )
}

ProfileShow.layout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default ProfileShow