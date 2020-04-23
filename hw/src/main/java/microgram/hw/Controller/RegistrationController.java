package microgram.hw.Controller;
import microgram.hw.Model.User;
import microgram.hw.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegistrationController {
    private static final BCryptPasswordEncoder crypt = new BCryptPasswordEncoder();


    @Autowired
    private UserRepository repo;

    @PostMapping("/registration")
    public User createComment(@RequestParam("email") String email, @RequestParam("name") String name,
                              @RequestParam("login") String login, @RequestParam("password") String password) {

        User p = new User( login, name, email,crypt.encode(password));
        repo.save(p);

        return p;
    }

    @PostMapping("/login")
    public User makeLogin(@RequestParam("login") String login, @RequestParam("password") String password) {

        User p = repo.findByUsername(login).get();
        repo.save(p);

        return p;
    }

}
